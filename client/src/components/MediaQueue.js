import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context-providers/AppContextProvider.js';

export function MediaQueue() {
    const { queuedMedia } = useContext(AppContext);

    return (
        <div>
            <p>Number of songs: {queuedMedia.length}</p>
            {
                (!queuedMedia ||queuedMedia.length === 0)
                ? <p>No songs are in the queue</p>
                : queuedMedia.map((item, index) => <p id="node" key={index}>{item.mediaName}</p>)
            }
        </div>
    );
}
