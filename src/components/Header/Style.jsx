import styled from 'styled-components'

export const Wrapper = styled.div`

.header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
}

.nav{
    height: calc(var(--header-height) + 1.5rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1 rem;
}

.nav__logo,
.nav__toggle {
  color: var(--title-color);
  font-weight: var(--font-medium);
}

.nav__icon,
.nav__close,
.nav__toggle{
    display:none;
}

.nav__list {
  display: flex;
  column-gap: 2rem;
}

.nav__link {
  display: flex;
  flex-direction:column;
  align-items:center;
  font-size: var(--small-font-size);
  color:var(--title-color);
  font-weight: var(--font-medium);
  trasition: .3s;
  border-radius:  1.5rem 1.5rem 0 0;
  trasition:0.3s;
}



.active-link,
.nav__link:hover{
    color: var(--title-color-dark);
}


@media screen and (max-width: 768px) {
    .header{
        top:initial;
        bottom:0;
    }

    .nav{
        height: var(--header-height);
    }

    .nav__menu{
        position:fixed;
        bottom:-100%;
        left:0;
        width: 100%;
        background-color: var(--body-color);
        padding: 2rem 1.5rem 4rem;
        box-shadow:0px -1px 4px rgba(0, 0, 0 ,0.15);
    }

    .show-menu{
        bottom:0;
    }

    .nav__list{
        display:grid;
        grid-template-columns: repeat(3 ,1fr);
        gap:2 rem;
    }
    
    .nav__icon{
        font-size: 1.2rem;
    }

    .nav__close{
        position: absolute;
        right: 1.3rem;
        bottom:0.5rem;
        font-size: 1.5rem;
        cursor:pointer;
        color: val(--title-color);

    }

    .nav__toggle{
        font-size:1.1rem;
        cursor :pointer;
    }
    
    .nav__close,
    .nav__icon,
    .nav__toggle{
        display:block;
    }
}

.scroll-header{
    box-shadow: 0px -1px 4px rgba(0, 0, 0 ,0.15);
}

@media screen and (max-width: 350px) {

    
    .nav__menu{
        padding: 2rem 0.25rem 4rem ;
    }

    .nav__list{
        column-gap:0;
    }
}
`