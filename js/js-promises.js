const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((mipost, index) => {
      output += `<li>${mipost.title}</li>`;
    });

// += means append
// <li></li> is a 'literal' tag which allows for string manipulation

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(mipost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(mipost);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

 const promise1 = Promise.resolve('Hello World');
 const promise2 = 123;
 const promise3 = new Promise((resolve, reject) => 
                  setTimeout(resolve, 2000, 'Goodbye')
                  );
 const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
                  res.json()
                  );

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
console.log(values)
);

//*--- WARREN created a var named promise, and a "promise.then" method for it passing in getPosts function as an input. 
//var promise = createPost({ title: 'Post Three', body: 'This is post three' });
//promise.then(getPosts);

promise = createPost({ title: 'Post Three', body: 'This is post three' })
.then(getPosts)
.catch(err => console.log(err));
