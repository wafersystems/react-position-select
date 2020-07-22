import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { formatMessage } from 'umi/locale';
import { List, Modal, Icon } from 'antd-mobile';
import { ADDRESS_CHOSE, ADDRESS_DISABLED, ADDRESS_FREE } from '@/pages/WorkSpace/utils/constant';
import styles from './PositionSelect.less';

const { Item } = List;

const PositionSelect = ({ spaceTree, showPositionSelect, onClose, title, selectTip, onChange, defaultValue }) => {

  const [choseList, setChoseList] = useState([]);
  const [selectList, setSelectList] = useState(undefined);
  const [childrenMap, setChildrenMap] = useState({});
  const [selectItem, setSelectItem] = useState(undefined);

  /**
   *  处理初始化数据
   */
  useEffect(() => {
    let data = spaceTree;
    for (let i = 0; i < defaultValue.length; i++) {
      const tmp = defaultValue[i];
      const parent = data.find(v => v.id === tmp.parentId);
      childrenMap[tmp.parentId] = parent;
      data = parent.children;
    }
    setChildrenMap(childrenMap);
    setChoseList(defaultValue);
  }, [defaultValue]);


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
        <span className={styles.selectItem}>{v.name}</span>}
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
                      style={index !== 0 ? { backgroundColor: ADDRESS_CHOSE } : {}}
                    />
                    <div className={styles.dot} />
                    <div className={styles.lineDown} style={{ backgroundColor: ADDRESS_CHOSE }} />
                  </div>
                  {makeItem(v)}
                </div>
                <div className={styles.itemDiv}>
                  <div className={styles.dotDiv}>
                    <div className={styles.lineUp} style={{ backgroundColor: ADDRESS_CHOSE }} />
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
                  style={index !== 0 ? { backgroundColor: ADDRESS_CHOSE } : {}}
                />
                <div className={styles.dot} />
                <div
                  className={styles.lineDown}
                  style={!_.isEmpty(v.children) ? { backgroundColor: ADDRESS_CHOSE } : {}}
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
    if(selectList.length === 0){
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
            const disabled =
              (v.children.length === 0 && Number(v.structure) !== 2) ||
              (Number(v.structure) === 2 && !v.mapId);
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
  selectTip: PropTypes.string,
  defaultValue: PropTypes.array,
};

PositionSelect.defaultProps = {
  title: formatMessage({ id: 'sws.please.select' }),
  selectTip: formatMessage({ id: 'sws.please.select' }),
  onClose: () => {
  },
  defaultValue: [],
};

export default PositionSelect;
