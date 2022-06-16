import React from "react";
import styled from "style-components";

const ProductNavUl = styled.ul `
    display: flex;
    list-style: none;
`;

const ProductNavLi = styled.li`
    color: ${(props) => (props.listName === props.id ? 'red' : 'black')};
    
`

function NavBar({ chageState, stateValue }) {
    return (
        <>
            <nav>
                <ProductNavUl>
                    <ProductNavLi id="doc" onClick={changeState}>
                        문서
                    </ProductNavLi>
                    <ProductNavLi>
                        자습서
                    </ProductNavLi>
                    <ProductNavLi>
                        블로그
                    </ProductNavLi>
                    <ProductNavLi>
                        커뮤니티
                    </ProductNavLi>
                    
                    
                    
                </ProductNavUl>
            </nav>
        </>
    )
}

export default NavBar;