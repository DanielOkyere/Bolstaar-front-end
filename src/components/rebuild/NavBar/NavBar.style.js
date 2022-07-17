import styled from "styled-components";

const NavBarRoot = styled.nav`
  width: 100%;
  height: 112px;

  .container {
    height: 100%;
    width: calc(100% - 48px);
    max-width: 1200px;
    margin-inline: center;

    display: grid;
    grid: 1fr / auto-flow max-content;
    justify-content: space-between;
    align-items: center;
  }

  .nav-list {
    display: grid;
    grid: 1fr / auto-flow max-content;
    gap: 8px;
    /* font-weight: 500; */
  }

  .nav-btn {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .nav-item a {
    color: #222;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  .buttons {
    display: grid;
    grid: 1fr / auto-flow max-content;
    gap: 16px;
  }

  .btn {
    box-sizing: border-box;
    height: 50px;
    padding: 16px 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50px;
  }

  .btn-empty {
    border: 1px solid #409c3e;
    color: #409c3e;
  }

  .btn-primary {
    border: 1px solid #409c3e;
    background: #409c3e;
    color: white;
  }

  .nav-list,
  .buttons {
    @media (max-width: 767px) {
      display: none;
    }
  }

  .close-btn,
  .nav-btn {
    cursor: pointer;
  }

  // Sidebar
  .sidebar {
    position: fixed;
    z-index: 100;
    inset: 0 auto auto -100%;

    width: 100%;
    max-width: 280px;
    height: 100%;

    display: grid;
    grid: max-content auto / 1fr;
    align-items: space-between;
    padding: 24px 16px;

    transition: left 500ms ease;
    background: white;
    pointer-events: none;

    .close-btn {
      position: absolute;
      right: 16px;
      top: 16px;
    }
  }

  .overlay {
    position: fixed;
    z-index: 95;
    inset: 0;

    transition: opacity 300ms ease;
    opacity: 0;
    background: rgba(0, 0, 0, 0.6);
    pointer-events: none;
  }

  @media screen and (max-width: 767px) {
    &.open {
      .overlay,
      .sidebar {
        pointer-events: auto;
      }

      .overlay {
        opacity: 1;
      }

      .sidebar {
        left: 0;

        .content {
          height: 100%;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
        }

        .nav-list {
          display: grid;
          grid: auto-flow 1fr / 1fr;
          margin-top: 64px;
        }

        .buttons {
          display: grid;
          grid: auto-flow 1fr / 1fr;
          margin-top: auto;
        }
      }
    }
  }
`;

export { NavBarRoot };
