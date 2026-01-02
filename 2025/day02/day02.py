#!/usr/bin/env python3

INPUT_FILE = "input.txt"

def sequence_generator(start, end):
    for i in range(start, end):
        yield i

def find_invalid_ids(range_item):
    invalid_ids = []
    edges = range_item.split("-")
    start = int(edges[0])
    end = int(edges[1])
    ids_gen = sequence_generator(start, end)
    for number in ids_gen:
        if check_number_for_pattern(number):
            invalid_ids.append(number)
    return invalid_ids

# Part 1 has fixed count 2
def make_parts(number, count):
    number_str = str(number)
    length = len(number_str)
    if ((length % count) > 0):
        return []
    part_len = length // count
    parts = []
    while len(number_str) != 0:
        parts.append(number_str[:part_len])
        number_str = number_str[part_len:]
    return parts

def check_number_for_pattern(number):
    number_str = str(number)
    for i in range(2, len(number_str) + 1):
        parts = make_parts(number, i)
        if (len(parts) == 0):
            continue
        if parts.count(parts[0]) == len(parts):
            return True
    return False


with open(INPUT_FILE) as file:
    ranges_str = file.readline().strip()
    ranges = ranges_str.split(",")
    invalid_ids = []
    for range_item in ranges:
        invalid_ids += find_invalid_ids(range_item)
    print(sum(invalid_ids))
