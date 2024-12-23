### Лабораторні роботи з курсу "Компоненти програмної інженерії" 
**Виконала студентка групи ІМ-32 Самойленко Марія**

### Content

  **Task 1** - відповідає файл [lab1.js](https://github.com/samoilenkomariia/kpi_labs/blob/main/lab1.js).  
  Написала реалізацію для array.map асинхронно на колбеках, додала підтримку debounce та error handling.
  * Choose array fn (map/filter/filterMap/some/find/findIndex)
  * Prepare its callback based async counterpart
  * Prepare demo cases for the usage
  * Add new on-demend feature during review
    e.g.: Add support for debounce (if the task took less then X time to
    complete -- add an additional execution delya)  

  **Task 2** - відповідає файл [lab2.js](https://github.com/samoilenkomariia/kpi_labs/blob/main/lab2.js).  
  Реалізувала окрім промісів та async await usecase підтримку паралелізму.
  * Prepare promise based alternative
  * Write use cases for the promise based solution
  * Write use cases for the async-await
  * Add new on-demend feature during review
    e.g.: Add support for parallelism

  **Task 3** - відповідає файл [lab3.js](https://github.com/samoilenkomariia/kpi_labs/blob/main/lab3.js).  
  Інтегрувала аборт контролер для коду з таски 2.  
  * Integrate AbortController or other Cancallable approach

  **Task 4** (Stream/AsyncIterator/Alternative) -- файл [lab4.js](https://github.com/samoilenkomariia/kpi_labs/blob/main/lab4.js)  
  Використала async generator, написала два приклади для читання даних з масиву об'єктів та файлу(на прикладі [example.jsonl](https://github.com/samoilenkomariia/kpi_labs/blob/main/example.jsonl)).  
  * Ongoing processing of large data sets that do not fit in memory

  **Task 5** (Observable/EventEmitter/Alternative) -- файл [lab5.js](https://github.com/samoilenkomariia/kpi_labs/blob/main/lab5.js).  
  Використала EventEmitter з декількома слухачами та зупинкою через таймаут 5 секунд.  
  * Reactive message based communication between entities  
