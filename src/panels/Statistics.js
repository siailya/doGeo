import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Avatar, Card, CardGrid, Separator, Header, Button, Group, Div } from '@vkontakte/vkui';
import Icon28StoryOutline from '@vkontakte/icons/dist/28/story_outline';

import {scoreDeclination} from '../Utils'
import GameStatCard from '../panels/elemenst/GameStatCard'

import bridge from '@vkontakte/vk-bridge';
import {STORY_STICKERS, STORY_LINKS} from '../Config'
import { getRandomArrayElement } from '../Utils';


class Statistics extends React.Component {
	constructor(props) {
        super(props);
        
        this.state = {
        }

        this.props.get_stat()
    }

    createStory() {
        bridge.send("VKWebAppShowStoryBox",
        {
          "background_type": "image",
          "url": getRandomArrayElement(STORY_LINKS),
          "locked": true,
          "stickers": [
            {
              "sticker_type": "renderable",
              "sticker": {
                "can_delete": 0,
                "content_type": "image",
                "url": STORY_STICKERS.open_dogeo_rotate,
                "clickable_zones": [
                  {
                    "action_type": "link",
                    "action": {
                      "link": "https://vk.com/app7459253",
                      "tooltip_text_key": "Открыть приложение"
                    },
                    "clickable_area": [
                      {
                        "x": 8,
                        "y": 7
                      },
                      {
                        "x": 703,
                        "y": 7
                      },
                      {
                        "x": 703,
                        "y": 381
                      },
                      {
                        "x": 8,
                        "y": 381
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
        );
      }

 
	render() {
        let { user, user_stat } = this.props

		return (
            <Panel id="statisticspanel">
                <PanelHeader>Статистика</PanelHeader>
                <div style={{ paddingTop: '2vh', paddingBottom: '2vh', fontFamily: 'Montserrat' }}>
                    <CardGrid>
                        <Card size="l" mode="shadow">
                            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', paddingTop: '1vh', paddingBottom: '1vh' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                                    <div style={{paddingRight: '2%'}}>
                                        <Avatar size={80} src={user.photo_200}/>
                                    </div>
                                    <div style={{fontSize: '1.2em', paddingLeft: '2%', margin: 'auto 0'}}>
                                        <div>
                                            {user.first_name} {user.last_name}
                                        </div>
                                        <div style={{fontSize: '1.2em', fontWeight: 500}}>
                                            {scoreDeclination(user_stat.rating)} 
                                        </div>
                                    </div>
                                </div>
                                <div style={{fontSize: '1.1em', fontWeight: 400, paddingTop: '1%'}}>
                                    Игр: {user_stat.games} | Верных ответов: {user_stat.right_answers}
                                </div>
                                <div style={{paddingTop: '2%'}}>
                                    <Button className="buttonPurple" before={<Icon28StoryOutline />} onClick={this.createStory}>
                                        Рассказать в истории
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </CardGrid>
                </div>
                <Separator></Separator>
                <Header mode='secondary'>История игр</Header>
                <Group>
                    {
                        user_stat.game_history &&
                        user_stat.game_history.slice(-30).reverse().map((game, index) => {
                            return(
                                <GameStatCard key={index} game_object={game}/>
                            )
                        })
                    }
                </Group>
                <Div style={{textAlign: 'center', fontFamily: 'Montserrat'}}>
                    Показаны 30 последних игр
                </Div>
            </Panel>
		);
	}
}

Statistics.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Statistics;
