import { Container } from "./Styles/Container.styled"
import { Flex } from "./Styles/Flex.styled"
import { StyledFooter } from "./Styles/Footer.styled"
import { SocialIcon } from "./SocialIcon"
export default function Footer() {
  return (
    <StyledFooter>

      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
        <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcon />
        </Flex>
        <p>&copy; 2022 H.P.Lakshitha Perera. All rights reserved</p>
      </Container>

    </StyledFooter>
  )
}
