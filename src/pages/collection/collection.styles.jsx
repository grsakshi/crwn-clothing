import styled from 'styled-components';
import CollectionItem from '../../components/collection-item/collection-item.component';


export const CollectionpageStyles = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleStyles = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const ItemStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`;

export const StyledCollectionItem = styled(CollectionItem)`
    margin-bottom: 30px;
`;
