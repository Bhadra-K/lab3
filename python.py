import numpy as np
# arr=np.arange(1,10)
# print(arr)
# indices=np.array([[3,4],[5,6]])
# newarr=arr[indices]
# print(newarr)

# x=np.arange(12)
# x_2d=x.reshape(3,4)
# row_indices=[2,2]
# col_indices=[0,3]
# selected=x_2d[row_indices,col_indices]
# print("2D Array:",x_2d)
# print("Selected elements:",selected)

# a=np.arange(25)
# newA=a.reshape(5,5)
# row=[1,3,4]
# col=[2,4,0]
# selected=newA[row,col]
# print(newA)
# print(selected)

#sort
# a=np.array([10,3,45,2])
# a.sort()
# print(a)

# a=np.array([[12,15],[10,1]])
# a1=np.sort(a,axis=0)
# a2=np.sort(a,axis=1)
# a3=np.sort(a,axis=None)
# print(a1)
# print(a2)
# print(a3)   

#argsort
#ascending order
# arr=np.array([5,3,10,2])
# sortedindex=np.argsort(arr)
# print(sortedindex)
# sortedarr=arr[sortedindex]
# print(sortedarr)
#descending order
# arr=np.array([5,3,10,2])  #using sort
# print(np.sort(arr)[::-1])
# or using argsort
# sortindex_desc = np.argsort(arr)[::-1]
# print(sortindex_desc)          # Indices for descending order
# print(arr[sortindex_desc])     # Sorted array in descending order


#lexsort()
# names=np.array(['Jake','Jay','Lara','Daniel','Lara'])
# marks=np.array([20,30,50,50,40])
# index=np.lexsort((names,marks))
# print(index)
# for i in index:
#     print(names[i],marks[i])

import matplotlib.pyplot as plt
import numpy as np
# x=np.array([1,8,2,7])
# y=np.array([3,10,1,5])
# plt.scatter(x,y)
# plt.plot(x,y,)
# plt.show()
y1=np.array([1,8,23,7])
y2=np.array([3,10,11,5])
# plt.plot(y1,y2)
# plt.title("Graph")
# plt.xlabel("x-axis")
# plt.ylabel("y-axis")
# plt.grid()
# plt.scatter(y1,y2)
# plt.bar(y1,y2)
plt.barh(y1,y2,color="red")
plt.show()
