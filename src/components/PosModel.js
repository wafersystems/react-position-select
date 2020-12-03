import React, { PureComponent } from 'react';
import { Modal, Tabs } from 'antd-mobile';
import Position from './Position';
import styles from "./PosModel.less";
import PropTypes from "prop-types";

class PosModel extends PureComponent {
    render() {
        const {
            title,
            showPositionSelect,
            onClose,
            spaceTree,
            spaceTree1,
            selectTip,
            defaultValue,
            defaultValue1,
            selectColor,
            selectFilter,
            tabs,
            onChange,
            onChange1
        } = this.props;
        return (
            <Modal
                popup
                closable
                title={title}
                visible={showPositionSelect}
                className={styles.modal}
                onClose={onClose}
                animationType="slide-up"
            >
                {spaceTree1 && spaceTree1.length > 0 ? (
                    <Tabs
                        tabs={tabs}
                    >
                        <Position spaceTree={spaceTree} selectTip={selectTip} defaultValue={defaultValue} selectColor={selectColor} selectFilter={selectFilter} onChange={onChange}/>
                        <Position spaceTree={spaceTree1} selectTip={selectTip} defaultValue={defaultValue1} selectColor={selectColor} selectFilter={selectFilter} onChange={onChange1} />
                    </Tabs>
                ) : <Position spaceTree={spaceTree} selectTip={selectTip} defaultValue={defaultValue} selectColor={selectColor} selectFilter={selectFilter} onChange={onChange}/>}

            </Modal>
        )
    }
}
PosModel.propTypes = {
    spaceTree: PropTypes.array.isRequired, // 空间数据
    spaceTree1: PropTypes.array.isRequired, // 空间数据
    tabs: PropTypes.array.isRequired,
    showPositionSelect: PropTypes.bool.isRequired, // 是否显示
    onClose: PropTypes.func, // 关闭回调
    onChange: PropTypes.func.isRequired, // 数据变化后回调
    onChange1: PropTypes.func.isRequired, // 数据变化后回调
    title: PropTypes.string, // title
    selectTip: PropTypes.string, // 提示
    defaultValue: PropTypes.array, // 默认值
    defaultValue1: PropTypes.array, // 默认值1
    selectColor: PropTypes.string,  // 选中颜色
    selectFilter: PropTypes.func // 选择列表过滤
};

PosModel.defaultProps = {
    title: '请选择',
    selectTip: '请选择',
    tabs: [
        { title: '内部区域', sub: '1' },
        { title: '共享区域', sub: '2' },
    ],
    onClose: () => {
    },
    defaultValue: [],
    showPositionSelect: false,
    selectColor: ' #fa8c16',
};
export default PosModel;