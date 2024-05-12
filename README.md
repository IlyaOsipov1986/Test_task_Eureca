Краткая инструкция:
—  Используйте фреймворк React (функциональный подход + React Hooks).
—  Используйте состояние React для хранения и управления сущностями тестового задания.
—  SCSS будет предпочтительнее CSS, но использование CSS не возбраняется, допускается использовать css-модули.
—  При именовании классов стилей желательно использовать методологию БЭМ.
—  Семантически именуйте ваши компоненты, по возможности организуйте файлы с применением методологии.
—  При отправке выполненного задания необходимсо предоставить код и демо работы приложения. 
Для чего можно использовать github+хостинг или codesandbox.io.
—  При возникновении неразрешимых трудностей во время выполнении задания, не стесняйтесь писать нам.

Требования к работе приложения:
—  На странице размещены 4 компонента таблицы. 
—  В таблице хранится информация о выбранных квартирах в формате: первый столбец подъезд, второй список номеров квартиры, выбранных в подъезде. 
Данный из таблице можно очистить нажатием кнопки с иконкой корзины.
Данный в таблицу можно добавить с помощью кнопки с иконкой плюса. При нажатии на неё открывается первое окно со списком подъездов, 
при выборе подъезда открывается второе окно со списком квартир, при нажатии на квартиру происходит её выбор. Выбор квартир должен быть
 множественным, можно выбрать как несколько квартир в одном подъезде, так и в разных подъездах. При нажатии на кнопку “Добавить” 
происходит добавление квартир в таблицу а окна выбора закрываются.  
—  Необходимо реализовать работу с приложением так, чтобы весь функционал был доступен с клавиатуры. Навигация по кнопкам таблиц должна 
корректно работать через Tab. В окнах выбора подъезда/квартиры должна осуществляться навигация с помощью стрелок (вправо-влево переключение между окнами выбора, вверх-вниз переключения между выбираемыми компонентами), выбор квартиры через Enter, сохранение выбранных квартир в таблицу через ctrl+Enter.
