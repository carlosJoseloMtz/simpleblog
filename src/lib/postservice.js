
const getPostById = postId => {
  const query = new Promise((accept, reject) => {
    const post = {
      id: postId,
      title: 'First story',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate mollis hendrerit. Donec non tincidunt elit, vitae finibus nisi. Nullam vel lorem eget lorem accumsan semper id vel tellus. Curabitur ex nisl, egestas ut neque nec, congue elementum mi. Sed eu justo mi. Nam dignissim dignissim lorem nec porta. Etiam neque enim, efficitur a varius et, lacinia quis augue. Curabitur maximus, augue sit amet vehicula imperdiet, leo mauris congue eros, ornare semper erat justo et augue. Praesent placerat lectus vitae vestibulum ullamcorper. Cras ultrices dui id cursus sollicitudin. Vestibulum consequat tortor non nisi sollicitudin, eget ultrices enim condimentum. Maecenas eleifend lacinia eros ut posuere. Phasellus pulvinar facilisis convallis. Nam vel interdum elit, a mollis ante. Integer congue fermentum nibh sit amet rutrum. Donec euismod arcu sed augue ornare placerat. Ut vulputate euismod fermentum. Pellentesque non nunc eget arcu semper ultrices a vulputate tellus. Phasellus at elit commodo, ornare nisl placerat, aliquam elit. Aenean scelerisque suscipit leo at iaculis. Vestibulum non velit vestibulum, pellentesque arcu sed, mattis velit. Nunc sed convallis ipsum, ac feugiat risus. Mauris sed massa non nisi porttitor malesuada. Morbi semper imperdiet lectus, interdum pharetra ligula eleifend eu. Morbi fermentum lacinia arcu, at feugiat nisl lacinia eget. Sed gravida nibh lectus, ut consectetur mi rhoncus et. Nam quis odio facilisis, dignissim purus quis, tincidunt nulla. Ut rutrum tortor nisi, nec venenatis turpis efficitur porta. Suspendisse ac odio sem. Pellentesque rhoncus diam neque, a commodo ipsum tempus pellentesque. Aenean eget feugiat metus. Nam vel sollicitudin est, non iaculis sapien. Praesent ultricies nunc et lorem tristique lacinia. In hac habitasse platea dictumst. Pellentesque porta, diam at sagittis tincidunt, est elit elementum tortor, eu facilisis libero urna a urna. Vivamus hendrerit sed mi non bibendum. Ut eu pretium tortor, nec porttitor ante. Morbi volutpat sodales dolor sed tempus. Cras cursus euismod leo, sed elementum erat imperdiet eu. Mauris quis commodo ante, et viverra justo. Aenean efficitur est in varius euismod. Integer eu diam a lectus viverra fringilla. Curabitur tincidunt sem finibus accumsan interdum. Ut vitae ornare ante, nec sagittis elit. Fusce mi neque, cursus vitae ante id, pellentesque sagittis nibh. Donec eget metus ac velit pretium dignissim. Morbi libero massa, feugiat eu maximus commodo, posuere vel lectus. Nunc at massa sed ante tempus dictum. Proin magna ligula, ullamcorper vitae ante vitae, porta consectetur odio. Cras vitae lectus dapibus, volutpat orci nec, vestibulum tortor. Phasellus lacinia faucibus augue, ut tempus dui. Quisque iaculis posuere lacinia. Vivamus hendrerit neque felis, nec tincidunt sapien dictum vitae. Duis mollis orci a pulvinar egestas. Praesent tincidunt lorem ac nulla tincidunt egestas. Ut facilisis vel nisi quis hendrerit. Sed eget sapien vel massa pharetra pharetra vitae quis ipsum. Duis id purus quis odio finibus viverra nec a nisl. Integer blandit nisl tortor, tempor imperdiet tortor venenatis quis.',
      postedAt: 'Nov 12 2017',
      author: {
        id: 'profileid1002',
        name: 'Carlos Martinez'
      }
    }
    accept(post)
  })

  return query
}

export { getPostById }
