import React from 'react';

import {
    Container,
    Role,
    User,
    Avatar,
} from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>   
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Dísponivel - 1</Role>
            <UserRow nickname="Michael Heming"/>

            <Role>Offline - 19</Role>
            <UserRow nickname="Jhonny" isBot/>

            <Role>Offline - 5</Role>
            <UserRow nickname="Fulano" isBot/>
            <Role>Dísponivel - 5</Role>
            <UserRow nickname="Fulano"/>
            <Role>Dísponivel - 5</Role>
            <UserRow nickname="Fulano"/>
            <Role>Dísponivel - 5</Role>
            <UserRow nickname="Fulano"/>
            <Role>Offline - 5</Role>
            <UserRow nickname="Fulano" isBot/>
            <Role>Dísponivel - 5</Role>
            <UserRow nickname="Fulano"/>
            <Role>Dísponivel - 5</Role>
            <UserRow nickname="Fulano"/>
            <Role>Dísponivel - 5</Role>
            <UserRow nickname="Fulano"/>
            <Role>Offline - 5</Role>
            <UserRow nickname="Fulano" isBot/>
            <Role>Offline - 5</Role>
            <UserRow nickname="Fulano" isBot/>
            <Role>Dísponivel - 5</Role>
            <UserRow nickname="Fulano"/>
            <Role>Offline - 5</Role>
            <UserRow nickname="Fulano" isBot/>
        </Container>
    )
};

export default UserList;