const INITIAL_STATE = {
    sections: [
        {
            title: 'teste',
            imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'teste',
            imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'teste',
            imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'teste',
            imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
            size: 'large',
            id: 4,
            linkUrl: ''
        },
        {
            title: 'teste',
            imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
            size: 'large',
            id: 5,
            linkUrl: ''
        },
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;