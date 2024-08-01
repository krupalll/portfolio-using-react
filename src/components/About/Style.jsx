import styled from 'styled-components'

export const Wrapper = styled.div`
.about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
}

.about__img {
    width: 350px;
    border-radius: 1.5rem;
    justify-self: center;
}

.about__info {
    grid-template-columns: repeat(3, 140px);
    gap: 0.5rem;
    margin-bottom: var(--mb-2);
}

.about__box {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.75rem;
    text-align: center;
    padding: 1rem 1.25rem;
}

.about__icon {
    font-size: 1.5rem;
    color: var(--title-color);
    margin-bottom: var(--mb-0-5);
    margin-top: var(--mb-0-25);
}

.about__title{
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
}

.about__subtitle{
    font-size: var(--tiny-font-size);
}

.about__description{
    padding: 0 4rem 0 0;
    margin-bottom: var(--mb-2-5);
}

@media screen and (max-width: 992px) {

    .about__container{
        grid-template-columns: 1fr;
        row-gap: 2.5rem;
    }
    
    .about__img{
        width:220px;
    }

    .about__box{
        padding:0 0.75rem 0.5rem;
    }

    .about__data{
        text-align: center;
    }

    .about__info{
        justify-content: center;
    }

    .about__description{
        padding:0 5rem;
        margin-bottom: 2rem;
    }
  }
  

  @media screen and (max-width: 576px) {
    .about__info{
        grid-template-columns: repeat(2, 1fr);
    }

    .about__description{
        padding: 0;
    }
  }
  
  @media screen and (max-width: 350px) {
        body{
            margin: 0 0 var(--header-height);
        }

        .section{
            padding: 2rem 0 4rem;
        }

        .section__subtitle{
            margin-bottom: var(--mb-3);
        }
  }
  
`