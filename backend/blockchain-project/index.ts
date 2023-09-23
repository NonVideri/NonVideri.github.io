import * as crypto from "crypto";

class Transaction {
  constructor(
    public amount: number,
    public payer: string, // public key
    public payee: string // public key
  ) {}

  // serialize to make it easier to work with
  toString() {
    return JSON.stringify(this);
  }
}

class Block {

  public nonce = Math.round(Math.random() * 999999999)
  
  // will have a single transaction
  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public ts = Date.now()
  ) {}

  get hash() {
    const str = JSON.stringify(this);
    const hash = crypto.createHash("SHA256");
    hash.end(str);
    return hash.digest("hex");
  }
}

class Chain {
  public static instance = new Chain();

  chain: Block[];

  constructor() {
    this.chain = [new Block("", new Transaction(100, "genesis", "satoshi"))];
  }

  get lastBlock() {
    return this.chain[this.chain.length - 1];
  }

  // proof of work
  // attempt to find a number that when added to the nonce produces a hash with 4 leading 0s
  mine(nonce: number) {
    let solution = 1;
    console.log("⛏️  mining...");

    while (true) {
      const hash = crypto.createHash("SHA128");
      hash.update((nonce + solution).toString()).end();

      const attempt = hash.digest("hex");

      if (attempt.substring(0, 4) === "0000") {
        console.log(`Solved: ${solution}`);
        return solution;
      }

      solution += 1;
    }
  }


  addBlock(transaction: Transaction, senderPublicKey: string, signature: Buffer) {
    
    // verify the transaction
    const verifier = crypto.createVerify('SHA256')
    verifier.end(transaction.toString())
    
    const isValid = verifier.verify(senderPublicKey, signature)
    
    if (isValid) {
      const newBlock = new Block(this.lastBlock.hash, transaction)
      // prevent double spending
      this.mine(newBlock.nonce)
      this.chain.push(newBlock)
    }
  }
}

class Wallet {
  public publicKey: string;
  public privateKey: string;

  constructor() {
    const keypair = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {type: 'spki', format: 'pem'},
      privateKeyEncoding: {type: 'pkcs8', format: 'pem'},
    })

    this.privateKey = keypair.privateKey
    this.publicKey = keypair.publicKey
  }

  sendMoney(amount: number, payeePublicKey: string) {
    const transaction = new Transaction(amount, this.publicKey, payeePublicKey)

    const signer = crypto.createSign('SHA256')
    signer.end(transaction.toString())
    const signature = signer.sign(this.privateKey)
    Chain.instance.addBlock(transaction, this.publicKey, signature)
  }
}
