import pydash as _
import re
test = data.split('\n')[1:-1]


// Part A
groups = []
for t in test:
    grouper = re.split(',|-',t)
    A = int(grouper[0])
    B = int(grouper[1])
    C = int(grouper[2])
    D = int(grouper[3])
    groupA = [str(a) for a in range(A, B+1, 1)]
    groupB = [str(a) for a in range(C, D+1, 1)]
    if all(x in groupA for x in groupB) or all(x in groupB for x in groupA):
        groups.append('x')

// Part B    
groups2 = []
for t in test:
    grouper = re.split(',|-',t)
    A = int(grouper[0])
    B = int(grouper[1])
    C = int(grouper[2])
    D = int(grouper[3])
    groupA = set([str(a) for a in range(A, B+1, 1)])
    groupB = set([str(a) for a in range(C, D+1, 1)])
    A2 = groupA.intersection(groupB)
    if len(A2) >= 1:
        groups2.append('Y')
