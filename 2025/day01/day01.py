#!/usr/bin/env python3

INPUT_FILE = "input.txt"
ENTRY_POINT = 50

def apply_operation(direction, state, count):
    if direction == "L":
        return state - count
    else:
        return state + count

def apply_rotation(state, rotation):
    direction = rotation[0]
    count = int(rotation[1:])
    operation_result = apply_operation(direction, state, count)
    overflows = abs(operation_result) // 100
    if operation_result < 0 and state != 0:
        overflows += 1

    new_state = (operation_result + 100) % 100
    return new_state, overflows

zeros_one = 0
zeros_two = 0
with open(INPUT_FILE) as file:
    state = ENTRY_POINT
    for line in file:
        state, overflows = apply_rotation(state, line)
        zeros_two += overflows
        if state == 0 and overflows == 0:
            zeros_two += 1
        if state == 0:
            zeros_one += 1 

print("Part 1: ", zeros_one)
print("Part 2: ", zeros_two)
