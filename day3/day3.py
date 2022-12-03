# day 3

"""
Part A - There is a rucksack. The rucksack has two compartments. An elf is not paying attention and when divvying up he puts the same item twice, once per rucksack. We need to find the item, and then give it it's priority value. If the item is lowercase then it gets a score between 1 and 26. If the item is uppercase it gets a priority between 27 and 52. 

Part B -- Elves are spread up into groups of 3. There are official badges given to each elf. The sticker this year was kinda sus so we're not sure which item is the actual badge or something. So we have to see which item overlaps between the 3 elves and then sum the priorities as we did in Part A's rules. 
"""

import string
lowercaseLetters = string.ascii_lowercase
lowerCasePriorities = {}
for i,l in enumerate(lowercaseLetters):
    lowerCasePriorities[l] = i+1
    
    
uppercaseLetters = string.ascii_uppercase
upperCasePriorities = {}
for i,l in enumerate(uppercaseLetters):
    upperCasePriorities[l] = i+27

    
    
rucksacks_list = rucksacks.split('\n')[1:-1]


sumsA = []

for i in rucksacks_list:
    half = int(len(i)/2)
    firstSack = set(i[:half])
    secondSack = set(i[half:])
    intersection = [firstSack & secondSack]
    overlapItem = next(iter(intersection[0]))
    if overlapItem in sorted(lowerCasePriorities):
        sumsA.append(lowerCasePriorities[overlapItem])
    else:
        sumsA.append(upperCasePriorities[overlapItem])
            
answerPartA = sum(sumsA)   

# # Part B # # 

groups = []
counter = 0

for i,e in enumerate(rucksacks_list):
    counter += 1
    # print(counter)
    if counter % 3 == 0:
        groups.append(rucksacks_list[i-2:i+1])
        
        
sums2 = []
for g in groups:
    intersection = [set(g[0]) & set(g[1]) & set(g[2])]
    overlapItem = next(iter(intersection[0]))
    if overlapItem in sorted(lowerCasePriorities):
        sums2.append(lowerCasePriorities[overlapItem])
    else:
        sums2.append(upperCasePriorities[overlapItem])
        
answerPartB = sum(sums2)