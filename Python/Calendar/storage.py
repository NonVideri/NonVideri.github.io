# Saving and loading files

import copy

FILENAME = 'meetings.txt'

START_TIME = 0
END_TIME = 1
MEETING_NAME = 2

def load_data():
    with open(FILENAME, 'r+') as f:
        meeting_list = f.readlines()
    for meeting in meeting_list:
        meeting = meeting.split(',')
        meeting[START_TIME] = int(meeting[START_TIME])
        meeting[END_TIME] = int(meeting[END_TIME])
    return meeting_list

def store_data(meeting_list):
    stored_list = copy.deepcopy(meeting_list)
    for meeting in stored_list:
        meeting[START_TIME] = str(meeting[START_TIME])
        meeting[END_TIME] = str(meeting[END_TIME])
        meeting = ','.join(meeting)
        meeting += '\n'
    with open(FILENAME, 'w+') as f:
        f.writelines
    return