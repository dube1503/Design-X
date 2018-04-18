# Formats .csv file info of everyones site data to output as HTML
import csv

def makeHTML(line):
    return '<a class="mix {}" href="{}"><img src="images/Valeria.jpg"><div class="name"><p>{}</p></div></a>'.format(*line[::-1])

with open('ExitURL.csv', newline='') as csvfile:
    line = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in line:
        row = [value.replace('"','') for value in row]
        for i in range(len(row)):
            if i == 0:
                row[i] = row[i].replace(' ','</p><p>')
            if i == 2:
                row[i] = row[i].lower()
        print(makeHTML(row),'\r')
