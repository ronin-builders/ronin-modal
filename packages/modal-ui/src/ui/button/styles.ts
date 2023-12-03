import { css } from 'lit'

export const styles = css`
.button {
  display: block;
  width: 134px;
  font-weight: 500;
  user-select: none;
  background-color: rgb(13 110 253);
  color: #e2e4e9;
  font-family: -apple-system,BlinkMacSystemFont,Inter,system-ui,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  border-radius: 0.4rem;
  cursor: pointer;
  padding: 11px 13px;
  text-align: center;
  max-width: 100%;
  font-size: 0.93rem;
  border: 0;

  color: hsl(210 40% 98%);
  
  transition: cubic-bezier(0.25,0.1,0.25,1) 250ms all;
}

.button:hover {
  background-color: rgb(13 110 253 / 0.9);
}

.truncate{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
`
