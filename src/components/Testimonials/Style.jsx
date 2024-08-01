import styled from 'styled-components'

export const Wrapper = styled.div`
    .testimonial__container{
        width: 750px;
    }

    .testimonial__card {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
    border-radius: 1.5rem;
    margin-bottom: var(--mb-3);
    }

    .testimonial__img {
        width: 60px;
        border-radius: 3rem;
        margin-bottom: var(--mb-1);
    }

    .testomonial__name{
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-25);
    }

    .testomonial__description{
        font-size: var(--small-font-size);
    }

    .swiper-pagination-bullet{
        background-color: var(--text-color) !important;
    }

    .swiper-pagination-bullet-active{
        background-color: var(--title-color);
    }

    @media screen and (max-width: 992px){
        .testimonial__container{
            width: initial;
        }

        .testimonial__card{
            padding: 1.25rem 1.5rem;
        }
    }
`