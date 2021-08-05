import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { List, Modal, Icon } from 'antd-mobile';
import styles from './PositionSelect.less';

// 位置选择组件颜色
// export const ADDRESS_CHOSE = '#1B84FF'; // 位置选择
export const ADDRESS_FREE = '#fff'; // 位置未选择
export const ADDRESS_DISABLED = '#9F9F9F'; // 位置置灰

const { Item } = List;

const PositionSelect = ({
                          spaceTree, showPositionSelect, onClose, title, selectTip, onChange,
                          defaultValue, selectColor, selectFilter, primaryColor
                        }) => {

  const [choseList, setChoseList] = useState([]);
  const [selectList, setSelectList] = useState(undefined);
  const [childrenMap, setChildrenMap] = useState({});
  const [selectItem, setSelectItem] = useState(undefined);

  /**
   *  处理初始化数据
   */
  useEffect(() => {
    if (spaceTree.length === 0) {
      return;
    }
    let data = spaceTree;
    try{
      for (let i = 0; i < defaultValue.length; i++) {
        const tmp = defaultValue[i];
        const parent = data.find(v => v.id === tmp.parentId);
        if (!parent && tmp.parentId === 0) {
          childrenMap[tmp.parentId] = data;
        } else {
          childrenMap[tmp.parentId] = parent.children;
          data = parent.children;
        }
        if (i === (defaultValue.length - 1)) {
          setSelectItem(tmp);
          setSelectList(parent.children);
        }
      }
      setChildrenMap(childrenMap);
      setChoseList(defaultValue);
    }catch (e){
      console.error(`PositionSelect defaultValue error.`)
    }

  }, [defaultValue, spaceTree]);

  /**
   *  处理初始化数据
   */
  useEffect(() => {
    if (!showPositionSelect) {
      setChoseList([]);
      setSelectList(undefined);
      setChildrenMap({});
      setSelectItem(undefined);
    }
  }, [showPositionSelect]);


  /**
   *
   * @param v
   * @returns {*}
   */
  const makeItem = v => {
    return (
      <Item
        key={v.id}
        onClick={() => {
          handleItemClick(v);
        }}
      >
        {(!selectItem || v.id !== selectItem.id) && v.name}
        {selectItem && v.id === selectItem.id &&
        <span style={{ color: selectColor }}>{v.name}</span>}
      </Item>
    );
  };

  /**
   *
   * @param v
   */
  const handleItemClick = v => {
    const tmp = childrenMap[v.parentId];
    if (tmp) {
      setSelectList(tmp);
      setSelectItem(v);
    }
  };

  /**
   *
   * @param choseList
   * @returns {*}
   */
  const makeChose = (choseList) => {
    return (
      <div>
        {choseList.map((v, index) => {
          if (index === choseList.length - 1 && !_.isEmpty(v.children)) {
            return (
              <div key={v.id}>
                <div className={styles.itemDiv}>
                  <div className={styles.dotDiv}>
                    <div
                      className={styles.lineUp}
                      style={index !== 0 ? { backgroundColor: primaryColor } : {}}
                    />
                    <div className={styles.dot} style={{backgroundColor: primaryColor,border: `1px solid ${primaryColor}`}} />
                    <div className={styles.lineDown} style={{ backgroundColor: primaryColor }} />
                  </div>
                  {makeItem(v)}
                </div>
                <div className={styles.itemDiv}>
                  <div className={styles.dotDiv}>
                    <div className={styles.lineUp} style={{ backgroundColor: primaryColor }} />
                    <div className={styles.dot} style={{ backgroundColor: ADDRESS_FREE }} />
                  </div>
                  <Item key="lastDot">{selectTip}</Item>
                </div>
              </div>
            );
          }
          return (
            <div key={v.id} className={styles.itemDiv}>
              <div className={styles.dotDiv}>
                <div
                  className={styles.lineUp}
                  style={index !== 0 ? { backgroundColor: primaryColor } : {}}
                />
                <div className={styles.dot} style={{backgroundColor: primaryColor,border: `1px solid ${primaryColor}`}} />
                <div
                  className={styles.lineDown}
                  style={!_.isEmpty(v.children) ? { backgroundColor: primaryColor } : {}}
                />
              </div>
              {makeItem(v)}
            </div>
          );
        })}
        {choseList.length === 0 && (
          <div className={styles.itemDiv}>
            <div className={styles.dotDiv}>
              <div className={styles.lineUp} />
              <div className={styles.dot} style={{ backgroundColor: ADDRESS_FREE }} />
            </div>
            <Item key="lastDot">{selectTip}</Item>
          </div>)}
      </div>);
  };

  /**
   *
   * @param v
   * @param selectList
   */
  const handleSelect = (v, selectList) => {
    let tmp = Array.from(choseList);
    if (selectItem) {
      const index = choseList.findIndex(item => item.id === selectItem.id);
      tmp = tmp.slice(0, index);
    }
    tmp.push(v);
    childrenMap[v.id] = selectList;
    setChildrenMap(childrenMap);
    setChoseList(tmp);
    setSelectList(selectList);
    setSelectItem(undefined);
    if (selectList.length === 0) {
      onChange(tmp);
    }
  };

  /**
   *
   * @param selectList
   * @returns {*}
   */
  const makeSelect = (selectList) => {
    let list = selectList;
    if (!selectList) {
      list = spaceTree;
    }
    return (
      <div className={styles.addressChildren}>
        <List>
          {list.map(v => {
            let disabled = false;
            if (selectFilter) {
              disabled = selectFilter(v);
            }
            return disabled ? (
              ''
            ) : (
              <Item
                key={v.id}
                disabled={disabled}
                onClick={() => {
                  handleSelect(v, v.children);
                }}
                extra={selectItem && v.id === selectItem.id ? <Icon type="check" /> : ''}
              >
                <span style={disabled ? { color: ADDRESS_DISABLED } : {}}>{v.name}</span>
              </Item>
            );
          })}
        </List>
      </div>
    );
  };

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
      <div className={styles.modalDiv}>
        {makeChose(choseList)}
        {makeSelect(selectList)}
      </div>
    </Modal>
  );
};

PositionSelect.propTypes = {
  spaceTree: PropTypes.array.isRequired, // 空间数据
  showPositionSelect: PropTypes.bool.isRequired, // 是否显示
  onClose: PropTypes.func, // 关闭回调
  onChange: PropTypes.func.isRequired, // 数据变化后回调
  title: PropTypes.string, // title
  selectTip: PropTypes.string, // 提示
  defaultValue: PropTypes.array, // 默认值
  selectColor: PropTypes.string,  // 选中颜色
  selectFilter: PropTypes.func, // 选择列表过滤
  primaryColor: PropTypes.string// 主色
};

PositionSelect.defaultProps = {
  title: '请选择',
  selectTip: '请选择',
  onClose: () => {
  },
  defaultValue: [],
  showPositionSelect: false,
  selectColor: '#FA8C16',
  primaryColor: '#1B84FF'
};

export default PositionSelect;
