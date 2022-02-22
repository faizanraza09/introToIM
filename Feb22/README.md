# Colors of Van Gogh

### Dataset
I got this dataset from kaggle. The dataset has details of van gogh paintings over the years. The data i used was the 5 hex color codes given for each painting and then displayed the colors from his paintings over time

### Process
I started off with looking at the dataset to see how i should approach extracting the data from the csv and then cleaning it. Then i loaded the csv, and then used the information i needed and put it into an array. Then I further parsed the hex code information and cleaned the brackets and apostrophe from the hex codes. Then I made the squares using colors from the dataset. 

### Difficulties
Cleaning the data took me a lot of time, first to parse the objects and then cleaning them multiple times to get hex codes in a form that i could use for my fill function

### Interesting Things
- Something that I found interesting was the loadTable function. It parses the csv as an object and then it also supports a lot of functions and queries that could help you to get specific data. 
- Another was the functions splitTokens and Trim that helped me to clean the data and get the hex codes in the form that I could use for filling
