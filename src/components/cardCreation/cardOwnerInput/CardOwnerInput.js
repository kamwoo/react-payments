import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardOwnerInput.style';

const CardOwnerInput = () => (
  <>
    <Styled.InputLabelContainer>
      <div>카드 소유자 이름(선택)</div>
      <div>3 / 30</div>
    </Styled.InputLabelContainer>
    <Styled.InputContainer>
      <TransparentInput width="100%" color={COLOR.MINT} placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
    </Styled.InputContainer>
  </>
);

export default CardOwnerInput;
