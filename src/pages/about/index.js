import React, { Component } from 'react'
import { Page, Container, Padding } from '../../components/layout'
import { Button, Primary } from '../../components/button'
import { HicetnuncContext } from '../../context/HicetnuncContext'
import { getLanguage } from '../../constants'
import styles from './index.module.scss'

export class About extends Component {
  static contextType = HicetnuncContext

  language = getLanguage()

  state = {
    reveal: false,
  }

  reveal = () => {
    this.setState({
      reveal: !this.state.reveal,
    })
  }

  render() {
    return (
      <Page>
        <Container>
          <Padding>
            <strong>hic et nunc</strong>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[0]}</p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[1]}</p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[2]}</p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <div className={styles.buttons}>
              <p>For consulting, networking or questions get in touch by</p>
              &nbsp;
              <Button href="mailto:hicetnunc2000@protonmail.com">
                <Primary>
                  <strong>email</strong>
                </Primary>
              </Button>
              <p>,</p>&nbsp;
              <Button href="https://discord.gg/jKNy6PynPK">
                <Primary>
                  <strong>discord</strong>
                </Primary>
              </Button>
              <p>, or on</p>&nbsp;
              <Button href="https://reddit.com/r/hicetnunc">
                <Primary>
                  <strong>reddit</strong>
                </Primary>
              </Button>
            </div>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <div className={styles.buttons}>
              <p>FAQ's are available</p>&nbsp;
              <Button href="https://github.com/hicetnunc2000/hicetnunc/blob/main/FAQ.md">
                <Primary>
                  <strong>here</strong>
                </Primary>
              </Button>
            </div>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <div className={styles.buttons}>
              <p>Issues can be reported</p>&nbsp;
              <Button href="https://github.com/hicetnunc2000/hicetnunc/issues">
                <Primary>
                  <strong>here</strong>
                </Primary>
              </Button>
            </div>
          </Padding>
        </Container>
      </Page>
    )
  }
}
