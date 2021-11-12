import React, { useRef, useEffect } from 'react';

import {
    Container,
    Messages,
    InputWrapper,
    Input,
    InputIcon,
} from './styles';

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
        div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />
                
                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="Michael Heming"
                    date="12/11/2021"
                    content="Hoje é sexta feira"
                />

                <ChannelMessage
                    author="João silva"
                    date="12/11/2021"
                    content={
                        <>
                            <Mention>@Michael Heming</Mention>, me carrega no cs go, plz ?
                        </>
                    }
                    hasMessage
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em chat livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;