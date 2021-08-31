import React, { Suspense, useState } from 'react';
import { PLACES } from '../../shared/Places';
const Gallery = React.lazy(() => import("../Gallery"));

export default function Blog() {
    const [places, setPlaces] = useState(PLACES);
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Gallery places={places} />
            </Suspense>
        </div>
    );
}