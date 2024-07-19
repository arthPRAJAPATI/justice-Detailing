import React from 'react';
import { InlineWidget } from 'react-calendly';
import './CalendlyEmbed.css';

const CalendlyEmbed = ({ url }) => {
    return (
        <div className="calendly-embed">
            <InlineWidget url={url} />
        </div>
    );
};

export default CalendlyEmbed;
