import styled from "styled-components";

const Heading = styled.h1.attrs(({level = 1}) => ({
    as: `h${level}`
}))`
    font-weight: 700;
`

const P = styled.p`
    font-size: calc(.77rem + .66vmin);
`

const Span = styled.span`
    font-size: calc(.77rem + .66vmin);
`
const A = styled.a`
    font-size: calc(.77rem + .66vmin);
`

export {
    Heading,
    P,
    Span,
    A
}