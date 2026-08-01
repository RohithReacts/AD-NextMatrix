import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontWeight: 900,
          borderRadius: '4px',
          border: '1px solid #e5e7eb',
        }}
      >
        A<span style={{ color: '#ef4444' }}>D</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
