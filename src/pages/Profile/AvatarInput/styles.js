import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  label {
      cursor: pointer;

      &:hover {
          opacity: .7;
      }

      img {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255, 0.3);
          background: #eee;
          margin-bottom: 20px;
      }

      input {
          display: none;
      }
  }

`;
