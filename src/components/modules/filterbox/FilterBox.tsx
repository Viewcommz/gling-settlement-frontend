import Input from "components/atomic/input/Input";
import SelectBox from "components/atomic/selectBox/SelectBox";
import useInput from "hooks/useInput";
import { Fragment } from "react";
import styled, { css } from "styled-components";

function SearchBar() {
    const {
        value: userId,
        hasValue: userIdHasValue,
        hasError: userIdHasError,
        valueChangeHandler: userIdChangeHandler,
        inputBlurHandler: userIdBlurHander,
        reset: resetUserId,
    } = useInput((value: string) => value.trim() !== "");

    return (
        <div>
            <Input type="password" id="password" value={userId} placeholder="search bar" onBlur={userIdBlurHander} onChange={userIdChangeHandler} />
        </div>
    );
}
function FilterBox() {
    return (
        <FilterBoxWrap>
            <Row key="search" label="검색" filterContent={[<SelectBox />, <SearchBar />]} />
            <Row key="date" label="판매일" filterContent={[<input type="date" />]} />
        </FilterBoxWrap>
    );
}

function Row<T>({ label, filterContent }: { label: string; filterContent: T[] }) {
    return (
        <RowWrap>
            <Label>{label}</Label>
            <Content>
                {filterContent.map((f) => (
                    <Fragment>
                        {f}
                        <Margin />
                    </Fragment>
                ))}
            </Content>
        </RowWrap>
    );
}
export default FilterBox;

const FilterBoxWrap = styled.div`
    width: 1200px;
`;
const RowWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
`;
const Label = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 50px;
    ${({ theme }) => css`
        background-color: ${theme.colors.gray50};
    `}
    font-weight: 500;
`;

const Content = styled.div`
    flex-grow: 6;
    padding-left: 50px;
    display: flex;
    align-items: center;
    height: 100%;
`;

const Margin = styled.div`
    width: 20px;
`;
