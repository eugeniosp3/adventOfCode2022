
"""
HOW TO -- 
print the data
look at how the lines are being broken up -  \n and \n\n 
split em
split the next level
convert to ints
sum up each list
take max of sums
find the index for that sum and add 1
"""

# /PYTHON
food = str(open("./day1data.txt", "r").read()).replace('"""', '')
byElf = food.split('\n\n')
byFoodandElf = [x.split('\n') for x in byElf]
sumFood = [sum([int(x) for x in foodItems]) for foodItems in byFoodandElf]
maxFood = max(sumFood)
elfWithMost = sumFood.index(maxFood) + 1
top3 = sorted(sumFood, reverse=True)[:3]

print(maxFood)
print(top3)
