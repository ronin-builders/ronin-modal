import { css } from 'lit'

export const styles = css`
:host{
  width:100%;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 28px;

  padding-bottom: 10px;

  margin: 10px 0 5px 0;  
}

#card-container{
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
}

#title{
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 100%;
}

#title img{
  width: 20px;
}

#title p{
  font-size: var(--ronin-title-font-size, 22px);
  margin: 0;
  padding: 0;
}

#close{
  background: none;
  border: none;
  color: #fff;
  padding: 0;
  margin: 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}
`