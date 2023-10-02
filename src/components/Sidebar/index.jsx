import { styled } from "styled-components"
import ItemNavigation from "../ItemNavigation"
const SidebarStyled = styled.ul`
list-style: none;
width: 280px ;
padding: 0;
margin: 0;
`


const Sidebar = () => {
    return (
        <aside>
            <nav>
                <SidebarStyled>
                    <ItemNavigation
                        iconActivate={'/icons/Home - ativo.png'}
                        iconDesactivate={'/icons/Home - inativo.png'}
                        Activate={true}
                    >
                        Início
                    </ItemNavigation>
                    <ItemNavigation
                        iconActivate={'/icons/Mais vistas - ativo.png'}
                        iconDesactivate={'/icons/Mais vistas - inativo.png'}

                    >
                        Mais vistos
                    </ItemNavigation>
                    <ItemNavigation
                        iconActivate={'/icons/Mais curtidas - ativo.png'}
                        iconDesactivate={'/icons/Mais curtidas - inativo.png'}

                    >
                        Mais Curtidos
                    </ItemNavigation>
                    <ItemNavigation
                        iconActivate={'/icons/Novas - ativo.png'}
                        iconDesactivate={'/icons/Novas - inativo.png'}

                    >
                        Novos
                    </ItemNavigation>
                    <ItemNavigation
                        iconActivate={'/icons/Surpreenda-me - ativo.png'}
                        iconDesactivate={'/icons/Surpreenda-me - inativo.png'}

                    >
                        Surpreenda-me
                    </ItemNavigation>
                </SidebarStyled>
            </nav>
        </aside>
    )
}

export default Sidebar