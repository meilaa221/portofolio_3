import React, { useState } from 'react';
import { Row, Col, ListGroup, Form, Card, Button } from 'react-bootstrap';

export const MusicPlayer = () => {
  const [songUrl, setSongUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlayerVisible, setIsPlayerVisible] = useState(false); // Toggle visibility

  const songs = [
    { title: 'Top Hits Playlist (Indonesia)', artist: 'Various Artists', url: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M' },
    { title: 'Chill Hits Playlist', artist: 'Various Artists', url: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd' },
    { title: 'Bahagiaku Bersamamu', artist: 'Various Artists', url: 'https://open.spotify.com/embed/playlist/18X26ngMjbAHHad2sDZGdX' },
    { title: 'Top Populer Indonesia', artist: 'Various Artists', url: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWSqsYansv6Q9' },
    { title: 'Podcast Horor', artist: 'Scary Things', url: 'https://open.spotify.com/embed/show/46rQrhTZXXmSom6XBOQHij' },
  ];

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSongSelect = (url) => {
    setSongUrl(url);
  };

  return (
    <section className="music-player" style={{ padding: '20px 0', backgroundColor: '#151515' }}>
      <Row className="justify-content-center text-center mb-3">
        <Col xs={12}>
          <Button
            variant={isPlayerVisible ? 'secondary' : 'primary'}
            onClick={() => setIsPlayerVisible(!isPlayerVisible)}
            className="mb-3"
          >
            {isPlayerVisible ? 'Hide Music Player' : 'Show Music Player'}
          </Button>
        </Col>
      </Row>

      {isPlayerVisible && (
        <Row className="align-items-start" style={{ backgroundColor: '#151515', borderRadius: '8px', padding: '20px' }}>
          {/* Playlist Section */}
          <Col xs={12} md={5} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <h4 className="mb-4 text-center">Select a Playlist</h4>
                {/* Search Input */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Search playlists..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>

                {/* Playlist Items */}
                <ListGroup variant="flush">
                  {filteredSongs.length > 0 ? (
                    filteredSongs.map((song, index) => (
                      <ListGroup.Item
                        key={index}
                        action
                        onClick={() => handleSongSelect(song.url)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div>
                          <strong>{song.title}</strong>
                          <br />
                          <small className="text-muted">{song.artist}</small>
                        </div>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>No playlists found</ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Player Section */}
          <Col xs={12} md={7}>
            <Card className="shadow-sm">
              <Card.Body className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                {songUrl ? (
                  <iframe
                    src={songUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="Spotify Player"
                  ></iframe>
                ) : (
                  <div className="text-center text-muted">
                    <p>Select a playlist to play</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </section>
  );
};
