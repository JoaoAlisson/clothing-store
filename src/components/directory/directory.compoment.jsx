import React from 'react';
import MenuItem from '../manu-item/manu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
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
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionsProps}) => (
                        <MenuItem key={id} {...otherSectionsProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;