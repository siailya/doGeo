import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Group, Card, CardGrid, SimpleCell, Avatar } from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';

import {getCountry} from '../../Utils'

class LGQuestionCard extends React.Component {
	constructor(props) {
        super(props);
        
        this.state = {
            slideIndex: 0,
            imageHeight : 350
        }
    }


	render() {
    let { cardnumber, total, firstPart, number, unit, flag, country, cardButton } = this.props

		return (
        <Group separator="hide">
          <CardGrid>
            <Card size="l" mode="shadow" style={{fontFamily: "Montserrat", height: "76vh"}}>
              <div style={{paddingBottom: '5%', paddingTop: "5%", paddingLeft: "5%", paddingRight: "5%",}}>
                <div style={{textAlign: "center"}}>
                  Карточка {cardnumber + 1}/{total}
                </div>
                <div style={{marginTop: "2vh", paddingLeft: "5%", paddingRight: "5%", marginBottom: "5%"}}>
                  <SimpleCell disabled before={<Avatar size={40} src={flag} />}>{getCountry(country)}</SimpleCell>
                </div>
                <div style={{marginTop: "10vh", fontSize: "3vh", textAlign: "center"}}>
                  {firstPart}
                </div>
                <div style={{textAlign: "center", fontSize: "7vh", fontWeight: 500, color: "var(--purple-dark)", marginTop: "5vh"}}>
                  {number}
                </div>
                <div style={{textAlign: "center", fontSize: "2vh", marginTop: "1vh", marginBottom: '4vh'}}>
                  {unit}
                </div>
                <div style={{display: "flex", justifyContent: "space-between", verticalAlign: "bottom"}}>
                  <div style={{textAlign: "center"}}>
                    <Button
                      className="buttonPurple"
                      style={{width: "7vh", height: "7vh", borderRadius: "50%"}}
                      onClick={() => cardButton('left')}
                      >
                      {<Icon24BrowserBack />}
                    </Button>
                    <br/>
                    <p style={{fontSize: "1.4vh"}}>На самом деле{<br/>}меньше</p>
                  </div>
                  <div style={{textAlign: "center", fontSize: "1.2vh"}}>
                    <p className="purpleText" style={{fontSize: "2.5vh", marginBottom: -10}}>Свайпайте</p> {<br/>} или пользуйтесь кнопками!
                  </div>
                  <div style={{textAlign: "center"}}>
                    <Button
                        className="buttonPurple"
                        style={{width: "7vh", height: "7vh", borderRadius: "50%"}}
                        onClick={() => cardButton('right')}
                        >
                      {<Icon24BrowserForward />}
                      </Button>
                    <br/>
                    <p style={{fontSize: "1.4vh"}}>На самом деле{<br/>}больше</p>
                  </div>
                </div>
              </div>
            </Card>
          </CardGrid>
        </Group>
		);
	}
}

LGQuestionCard.propTypes = {
  // TODO: Указать типы
};

export default LGQuestionCard;
