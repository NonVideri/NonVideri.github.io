# User UI and input functions

START_TIME = 0
END_TIME = 1
MEETING_NAME = 2
WORKING_HOURS_START = 8
WORKING_HOURS_END = 18

def print_schedule(meeting_list):
    print('Your schedule for the day:')
    if meeting_list == []:
        print('(empty)')
    else:
        for meeting in meeting_list:
            print(f'{meeting[START_TIME]} — {meeting[END_TIME]} {meeting[MEETING_NAME]}')

def print_total_time(meeting_list):
    total_time = 0
    for meeting in meeting_list:
        total_time += meeting[END_TIME] - meeting[START_TIME]
    print(f'You have {total_time} hours of meetings in total.')

def print_menu():
    print('''
Menu:
(s) schedule a new meeting
(c) cancel an existing meeting
(e) edit an existing meeting
(o) compact meetings
(q) quit''')

def ask_input():
    answer = input('Your choice: ')
    return answer

def print_edit():
    print('''What do you want to edit?
(n) name
(t) time
(d) duration''')

def working_hours_error():
    print(f'ERROR: Meeting is outside of your working hours ({WORKING_HOURS_START} to {WORKING_HOURS_END})!')

def no_meeting_error():
    print('ERROR: There is no meeting starting at that time!')

def wrong_duration_error():
    print('ERROR: Wrong duration. Try again.')

def wrong_option_error():
    print('ERROR: There is no such option.')

def overlap_error(meeting):
    print(f'ERROR: Meeting overlaps with existing meeting! ({meeting[MEETING_NAME]})')

def enter_duration():
    duration = int(input('Enter duration in hours (1 or 2): '))
    return duration

def enter_start_time():
    start_time = int(input('Enter start time: '))
    return start_time