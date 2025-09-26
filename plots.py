#STEM PLOT
import matplotlib.pyplot as plt
scores=[55,60,62,65,68,70,72,75]   #quiz scores
print("Stem | Leaf")
for score in scores:
    stem=score // 10    #tens digit
    leaf=score % 10     #units digit
    print(f"{stem} | {leaf}")
x=range(1,len(scores)+1)
y=scores
plt.stem(x,y,linefmt='C0-',markerfmt='o',basefmt='C3-')
plt.title("Stem plot of Quiz Scores")
plt.xlabel("Student Number")
plt.ylabel("Score")
plt.show()

#HISTOGRAM
import matplotlib.pyplot as plt
scores=[55,60,62,65,68,70,72,75,78,80]
plt.hist(scores,bins=[50,60,70,80,90],color='skyblue',edgecolor='black')
plt.title("Histogram of Quiz Scores")
plt.xlabel("Score Range")
plt.ylabel("Number of Students")
plt.show()

#PIE CHART
import matplotlib.pyplot as plt 
fruits=['apple','banana','mango','berry']
counts=[3,2,3,2]
plt.pie(counts,labels=fruits,autopct='%1.1f%%',startangle=90,colors=['red','yellow','orange','skyblue'])
plt.title("Favourite fruits of students")
plt.show()

#VIOLIN PLOT 
import seaborn as sns 
import matplotlib.pyplot as plt
import pandas as pd
data=pd.DataFrame({'subject':['math']*5 + ['science']*5,'score':[50,60,70,80,90,55,65,75,85,95]})
sns.violinplot(x='subject',y='score',data=data,palette='pastel')
plt.title("Violin plot of student scores")
plt.show()
