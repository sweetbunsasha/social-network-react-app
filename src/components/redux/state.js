let rerenderEntireTrees = () => {
  console.log('jhjh')
}

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'I study react js', likescounter: '15'},
      {id: 2, message: 'My heart is broken ;(', likescounter: '1'},
    ],
    newPostText: 'Lalala'
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Sergey'},
      {id: 2, name: 'Valentina'},
      {id: 3, name: 'Ivan'},
      {id: 4, name: 'Makar'},
      {id: 5, name: 'Mom'},
      {id: 6, name: 'Dad'},
    ],
    messages: [
      {id: 1, message: 'Yo'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'What are you doing today?'},
      {id: 4, message: 'Haha lol'},
      {id: 5, message: 'NO'},
      {id: 6, message: 'I want to eat'},
    ]
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Sergey'},
      {id: 2, name: 'Valentina'},
      {id: 3, name: 'Ivan'}
    ]
  }
}

window.state = state;

export const addPost = () => {
  // debugger;
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likescounter: 2
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTrees(state);
  state.profilePage.newPostText = '';
}

export const updateNewPostChange = (newText) => {
  // debugger;
  state.profilePage.newPostText = newText;
  rerenderEntireTrees(state);
}

export const subscribe = (observer) => { // observer - наблюдатель
  rerenderEntireTrees = observer;
}

export default state;