# Main functions

import ui
import storage


START_TIME = 0
END_TIME = 1
MEETING_NAME = 2
WORKING_HOURS_START = 8
WORKING_HOURS_END = 18

LIST_RETURNED = 0
ON_OR_OFF = 1

def translate_input(answer, meeting_list):
    # I can't get this to work with functions that return results, but I leave it for completness sake:
    dic_function = {
                    's': schedule_meeting,
                    'c': cancel_meeting,
                    'q': quit
                    }
    
    dic_function[answer](meeting_list)
    
    if answer == 's':
        meeting_list = schedule_meeting(meeting_list)
        return meeting_list
    elif answer == 'c':
        meeting_list = cancel_meeting(meeting_list)
        return meeting_list
    elif answer == 'e':
        meeting_list = edit_meeting(meeting_list)
        return meeting_list
    elif answer == 'o':
        meeting_list = compact_meetings(meeting_list)
        return meeting_list
    elif answer == 'q':
        return 'quit'
    else:
        ui.wrong_option_error()

def sort_meetings(meeting_list):
    meeting_list.sort(key=lambda x: x[START_TIME])

def check_duration(duration):
    if duration != 1 and duration != 2:
        ui.wrong_duration_error()
        return False
    else:
        return True

def check_conditions(meeting_list, start_time, end_time, title=None):
    if start_time < WORKING_HOURS_START or end_time > WORKING_HOURS_END:
        ui.working_hours_error()
        return False
    else:
        return check_overlaping(meeting_list, start_time, end_time, title)

def check_overlaping(meeting_list, start_time, end_time, title):
    for meeting in meeting_list:
        if ((start_time == meeting[START_TIME] or start_time < meeting[START_TIME] and end_time > meeting[START_TIME] or start_time > meeting[START_TIME] and start_time < meeting[END_TIME])
        and meeting[MEETING_NAME] != title):
            ui.overlap_error(meeting)
            return False
        else:
            return True

def schedule_meeting(meeting_list):
    print('Schedule a new meeting.')
    meeting_title = input('Enter meeting title: ')
    duration_done = False
    while duration_done == False:
        duration = ui.enter_duration()
        duration_done = check_duration(duration)
    
    time_done = False
    while time_done == False:
        start_time = ui.enter_start_time()
        end_time = start_time + duration
        time_done = check_conditions(meeting_list, start_time, end_time)
    
    meeting_list.append([start_time, end_time, meeting_title])
    sort_meetings(meeting_list)
    storage.store_data(meeting_list)
    return meeting_list

def cancel_meeting(meeting_list):
    print('Cancel an existing meeting.')
    time_done = False
    while time_done == False:
        start_time = ui.enter_start_time()
        for meeting in meeting_list:
            if meeting[START_TIME] == start_time:
                meeting_list.remove(meeting)
                print('Meeting cancelled.')
                storage.store_data(meeting_list)
                return meeting_list
        ui.no_meeting_error()

def edit_meeting(meeting_list):
    print('Edit an existing meeting.')
    time_done = False
    while time_done == False:
        start_time = ui.enter_start_time()
        for meeting in meeting_list:
            if meeting[START_TIME] == start_time:
                time_done = True
                ui.print_edit()
                answer = ui.ask_input()
                if answer == 'n':
                    print('Edit title.')
                    name = input('Enter new title: ')
                    meeting[MEETING_NAME] = name
                    storage.store_data(meeting_list)
                    return meeting_list
                elif answer == 't':
                    print('Edit time.')
                    new_time_done = False
                    while new_time_done == False:
                        new_start_time = int(input('Enter new start time: '))
                        duration = meeting[END_TIME] - meeting[START_TIME]
                        new_end_time = new_start_time + duration
                        new_time_done = check_conditions(meeting_list, new_start_time, new_end_time, meeting[MEETING_NAME])
                    meeting[START_TIME] = new_start_time
                    meeting[END_TIME] = new_end_time
                    sort_meetings(meeting_list)
                    storage.store_data(meeting_list)
                    return meeting_list
                elif answer == 'd':
                    print('Edit duration.')
                    new_duration_done = False
                    while new_duration_done == False:
                        new_duration = ui.enter_duration()
                        start_time = meeting[START_TIME]
                        new_end_time = meeting[START_TIME] + new_duration
                        new_duration_done = check_duration(new_duration) and check_conditions(meeting_list, start_time, new_end_time, meeting[MEETING_NAME])
                    meeting[END_TIME] = new_end_time
                    storage.store_data(meeting_list)
                    return meeting_list
        ui.no_meeting_error()

# tytuł, duration, time do osobnych funkcji

def compact_meetings(meeting_list):
    earliest_hour = WORKING_HOURS_START
    for meeting in meeting_list:
        duration = meeting[END_TIME] - meeting[START_TIME]
        meeting[START_TIME] = earliest_hour
        meeting[END_TIME] = meeting[START_TIME] + duration
        earliest_hour = meeting[END_TIME]
    storage.store_data(meeting_list)
    return meeting_list


def main():
    meeting_list = storage.load_data()
    app_on = True
    while app_on == True:
        ui.print_schedule(meeting_list)
        ui.print_menu()
        answer = ui.ask_input()
        try:
            meeting_list = translate_input(answer, meeting_list)
        except ValueError:
            print('ValueError: You have to enter a number!')
        if meeting_list == 'quit':
            app_on = False

main()