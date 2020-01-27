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
                    id: 1
                },
                {
                    title: 'teste',
                    imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
                    id: 2
                },
                {
                    title: 'teste',
                    imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
                    id: 3
                },
                {
                    title: 'teste',
                    imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'teste',
                    imageUrl: 'http://i.ibb.co/R70vBrQ/menu.png',
                    size: 'large',
                    id: 5
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, title, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;