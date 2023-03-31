![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# Node exercise

This is a simple exercise to get you started with Node.js. You will create a node file that will read a file count how many times each word appears in the file and than write the results to a new file.

1. Create a new file called `word_count.js`
2. In the file, require the `fs` module
3. Read the file `sample.txt` and store the contents in a variable (hint: use the `readFileSync` method)
4. Split the contents of the file into an array of words (hint: use the `split` method)
5. Remove all punctuation from the words (hint: use the `replace` method)
6. Count how many times the word Javascript appears in the file
7. Write the results to a new file called `count.txt` (hint: use the `writeFileSync` method) like this:

```
The word "JavaScript" appears 3 times in the text.
```
