# part A
import pandas as pd
df = pd.read_csv("day2.csv", header=None)


handStrat = {
    "A": "Y",
    "B": "X",
    "C": "Z"
}

points = {
    'AY': 8,
    'BY': 5,
    'CY': 2,
    'AX': 4,
    'BX': 1,
    'CX': 7,
    'AZ': 3,
    'BZ': 9,
    'CZ': 6
}

part2Map = {
    "AX": ["C", 3],
    "AY": ["A", 4],
    "AZ": ["B", 8],
    "BX": ["A", 1],
    "BY": ["B", 5],
    "BZ": ["C", 9],
    "CX": ["B", 2],
    "CY": ["C", 6],
    "CZ": ["A", 7],
}

df['opponent'] = df[0].str.split(' ').apply(lambda x: x[0])
df['unsure'] = df[0].str.split(' ').apply(lambda x: x[1])
df['myStrate'] = df.opponent.map(handStrat)

df['resultHands'] = df.opponent + df.myStrate
df['pointsAwarded'] = df.resultHands.map(points)

# answer for part A - cant remember which one it was
# partAAnswer = df.pointsAwarded.sum()
partAAnswer = df['encryptedStrategyGuide'].map(points).sum()


#  part B starts here
df.drop(0, axis=1)
df['encryptedStrategyGuide'] = df.opponent + df.unsure

df['part2HandPlayed'] = df.encryptedStrategyGuide.map(part2Map)
df['part2PointsAwarded'] = df.part2HandPlayed.apply(lambda x: x[1])

# answer part B
partBAnswer = df.part2PointsAwarded.sum()
