import React, { Component } from 'react';
import Counter from './Counter'

interface Profile {
  id: number;
  email: string;
}

interface ProfileListProps {
}

interface ProfileListState {
  profiles: Array<Profile>;
  isLoading: boolean;
}

class ProfileList extends Component<ProfileListProps, ProfileListState> {

  constructor(props: ProfileListProps) {
    super(props);

    this.state = {
      profiles: [],
      isLoading: false
    };
  }


//  async componentDidMount() {
//    this.setState({isLoading: true});
//
//    const response = await fetch('http://localhost:3000/profiles');
//    const data = await response.json();
//    this.setState({profiles: data, isLoading: false});
//  }



async componentDidMount() {
    this.setState({isLoading: true});

    const response = await fetch('http://localhost:3000/profiles');
    const data = await response.json();
    this.setState({profiles: data, isLoading: false});

    const socket = new WebSocket('ws://localhost:3000/ws/profiles'); 
    socket.addEventListener('message', async (event: any) => { 
      const profile = JSON.parse(event.data);
      this.state.profiles.push(profile);
      this.setState({profiles: this.state.profiles}); 
    });
  }
  
  


  render() {
    const {profiles, isLoading} = this.state;

    if (isLoading) {
      return (
		<div><p>Loading...</p><Counter /></div>
	)};

    return (
      <div>
        <h2>Profile List</h2>
        {profiles.map((profile: Profile) =>
          <div key={profile.id}>
            {profile.email}<br/>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileList;

