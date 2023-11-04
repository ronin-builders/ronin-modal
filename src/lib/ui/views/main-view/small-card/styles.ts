import { css } from "lit";

export const styles = css`
.host{

}

#card{
  border-radius: 14px;
  height: 50px;
  background-color: rgba(54,54,54);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 15px;
  cursor:pointer;
  user-select: none;

  transition: all .2s ease;
}

#card:hover{
  background-color: rgba(64,64,64);
}

img{
  width: var(--ronin-small-card-img-width, 34px);
  height: var(--ronin-small-card-img-height, 34px);
}
`