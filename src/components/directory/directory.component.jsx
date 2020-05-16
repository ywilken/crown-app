import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.styles.scss';

// This is now a class component because we will need to get our state
class Directory extends React.Component {
    constructor() {
        super();

        this.state= {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
              
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map( ({id, title, imageUrl, size}) => {
                    return <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size}/>
                })}
            </div>
        )
    }
}

export default Directory;


// This is one way to do it - we write for every prop "section."
// In the above example we destructured section to get an even simpelr approach
/* render() {
    return (
        <div className='directory-menu'>
            {this.state.sections.map( (section) => {
                return <MenuItem key={section.id} title={section.title.toUpperCase()} img={section.imageUrl}/>
            })}
        </div>
    )
} */