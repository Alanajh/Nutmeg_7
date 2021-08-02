import { Component} from 'react';
import ''

const menu_items = [
    {
        menuButton: 'Tests',
    },
    {
        menuButton: 'Scores',
    },
    {
        menuButton: 'Room Reach',
    },
    {
        menuButton: 'Reference',
    },
    {
        menuButton: 'Live',
    },
    {
        menuButton: 'Help',
    }

];

const menuBtns = menu_items.map(item => (
    <p><button>{item.menuButton}</button></p>
));  

class Menu extends Component {
    render() {
        return  <div>
                {menuBtns}
            </div>   
     }
}
export default Menu;